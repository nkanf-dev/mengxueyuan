
$(function() {
  fabric.Image.fromURL('assets/example.jpg', function(img) {
    // 旋转90度
    img.set({
      originX: 'center',
      originY: 'center',
      angle: 270
    });
    // 旋转后宽高互换
    var w = img.height, h = img.width;
    var canvas = new fabric.Canvas('c', {
      width: w,
      height: h
    });
    // 设置图片居中
    img.set({ left: w/2, top: h/2 });
    canvas.setWidth(w);
    canvas.setHeight(h);
    canvas.add(img);
    canvas.setActiveObject(img);
    canvas.renderAll();
    // 让canvas自适应屏幕宽度
    var maxW = Math.min(window.innerWidth * 0.65, w);
    var scale = maxW / w;
    if (scale < 1) {
      canvas.setZoom(scale);
      canvas.setWidth(w * scale);
      canvas.setHeight(h * scale);
    }
  }, {crossOrigin: 'anonymous'});
});
