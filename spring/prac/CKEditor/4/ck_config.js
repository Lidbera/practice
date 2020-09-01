CKEDITOR.editorConfig = function (config) {
  config.language = "ko";
  config.resize_enabled = false;
  config.toolbar = [
    ["Font", "FontSize"],
    ["Bold", "Italic", "Strike", "Underline"],
    ["JustifyLeft", "JustifyCenter", "JusticyRight", "JustifyBlock"],
    ["Image"],
    ["Undo", "Redo"],
    ["Source"],
  ];
  config.font_names = "맑은 고딕; 굴림; 돋움; 궁서";
};
