new Vue({
  el: "#app",
  data() {
    return {
      x: -1,
      y: -1,
      comments: [],
    };
  },
  methods: {
    getCoord(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.$el.addEventListener("mousemove", this.mouseMove, false);
    },
    mouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    commentListCleaner() {
      if (
        this.comments.length &&
        this.comments[this.comments.length - 1].saved === false
      ) {
        this.comments.pop();
      }
    },
    showTextArea(i) {
      this.comments[i].showTextArea = true;
    },
    commentSaver(e, index, comment) {
      e.preventDefault();
      this.comments[index].text = comment;
      this.comments[index].saved = true;
      this.comments[index].showTextArea = false;
    },
    deleteComment(e, index) {
      e.preventDefault();
      this.comments.splice(index, 1);
    },
    addComment() {
      let image = document.getElementById("image");
      this.commentListCleaner();
      this.comments.push({
        x: image.offsetLeft + this.x - 15,
        y: image.offsetTop + this.y - 15,
        text: "",
        showTextArea: true,
        saved: false,
      });
    },
  },
});
