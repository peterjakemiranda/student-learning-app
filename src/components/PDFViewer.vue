<template>
<div class="text-center" v-if="loading">
    <q-spinner-hourglass
      color="primary"
      size="2em"
    /> loading file preview...
  </div>
  <div v-show="!loading">
    <div id="viewerContainer">
      <canvas :id="id || 'canvas-pdf'" style="width:100%"></canvas>
    </div>

    <div class="row items-center justify-center q-gutter-md">
      <span>Page: {{currentPageIndex + 1}}/{{totalPagesCount}}</span>
      <div v-if="totalPagesCount > 1">
        <q-btn label="Prev" type="button" color="purple" @click.prevent="prevPage()"/>
        <q-btn label="Next" type="submit" color="secondary" @click.prevent="nextPage()"/>
      </div>
    </div>  
  </div>
</template>

<script>
import * as pdfjs from "pdfjs-dist/build/pdf.js";
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.min.js";
export default {
  components: {
  },
  props: ['src', 'id'],
  data() {
    return {
      loading: false,
      currentPageIndex:0,
      pdf:undefined,
      totalPagesCount:0,
      canvas:null,
      ctx:null,
    }
  },
  mounted() {
    this.canvas = document.getElementById(this.id || 'canvas-pdf');
    this.ctx = this.canvas.getContext("2d");
    this.fetchPDF();
  },
	beforeUnmount(){
    this.pdf.destroy()
  },
  methods: {
    enablePinchZoom() {
        let startX = 0, startY = 0;
        let initialPinchDistance = 0;        
        let pinchScale = 1;    
        const viewer = this.canvas;
        const container = document.getElementById("viewerContainer");
        const reset = () => { startX = startY = initialPinchDistance = 0; pinchScale = 1; };
        // Prevent native iOS page zoom
        //document.addEventListener("touchmove", (e) => { if (e.scale !== 1) { e.preventDefault(); } }, { passive: false });
        document.addEventListener("touchstart", (e) => {
            if (e.touches.length > 1) {
                startX = (e.touches[0].pageX + e.touches[1].pageX) / 2;
                startY = (e.touches[0].pageY + e.touches[1].pageY) / 2;
                initialPinchDistance = Math.hypot((e.touches[1].pageX - e.touches[0].pageX), (e.touches[1].pageY - e.touches[0].pageY));
            } else {
                initialPinchDistance = 0;
            }
        });
        document.addEventListener("touchmove", (e) => {
            if (initialPinchDistance <= 0 || e.touches.length < 2) { return; }
            if (e.scale !== 1) { e.preventDefault(); }
            const pinchDistance = Math.hypot((e.touches[1].pageX - e.touches[0].pageX), (e.touches[1].pageY - e.touches[0].pageY));
            const originX = startX + container.scrollLeft;
            const originY = startY + container.scrollTop;
            pinchScale = pinchDistance / initialPinchDistance;
            viewer.style.transform = `scale(${pinchScale})`;
            viewer.style.transformOrigin = `${originX}px ${originY}px`;
        }, { passive: false });
        document.addEventListener("touchend", (e) => {
            if (initialPinchDistance <= 0) { return; }
            viewer.style.transform = `none`;
            viewer.style.transformOrigin = `unset`;
            this.pdf.currentScale *= pinchScale;
            const rect = container.getBoundingClientRect();
            const dx = startX - rect.left;
            const dy = startY - rect.top;
            container.scrollLeft += dx * (pinchScale - 1);
            container.scrollTop += dy * (pinchScale - 1);
            reset();
        });
    },
    /*
    * Render next page - handler
    */
    nextPage(){
      this.currentPageIndex++
      if( this.currentPageIndex > this.totalPagesCount - 1 ){
        this.currentPageIndex = this.totalPagesCount - 1
      }
      this.render()
    },
    /*
    * Render previous page - handler
    */
    prevPage(){
      this.currentPageIndex--
      if( this.currentPageIndex < 0 ){
        this.currentPageIndex = 0
      }
      this.render()
    },
    /*
    * Fetch PDF file fomr server
    */
    fetchPDF() {
      this.loading = true;
      pdfjs.getDocument( this.src ).promise.then( doc =>{
        this.pdf = doc
        this.totalPagesCount = doc.numPages;
        this.render()
      })
    },
    /*
    * Render current page
    */
    render(){
      this.pdf.getPage( this.currentPageIndex + 1 ).then( page => {
        this.drawPage( page )
      })
    },
    /*
    * Draw page to canvas
    */
    drawPage( page ){
      let viewport = page.getViewport({scale:1.5});
      this.canvas.height = viewport.height;
      this.canvas.width = viewport.width;
      page.render({
          canvasContext: this.ctx,
          viewport: viewport
      });
      this.enablePinchZoom();
      this.loading = false;
    }
  }
}
</script>