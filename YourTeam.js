$('document').ready(function(){
  $('button').click(function(){
    window.location.href = "Submittal.html";
  })
  $("#pid").hover(function() {
      showParagraph("Dave- Knowlegde Searcher");
  }, function(){
     clearParagraph();
  });

  $(".img-circle").hover(function(){
       showParagraph("Siven- Space Engine Creater");
  }, function(){
     clearParagraph();
  });

  $("#bid").hover(function(){
       showParagraph("giryn- Knowledge Searcher");
  }, function(){
      clearParagraph();
  });
  $("#sid").hover(function(){
      showParagraph("Tom- Software Engineer");
  }, function(){
      clearParagraph();
  });
  $("#fid").hover(function(){
      showParagraph("guru- Robot surgeon Specialist");
  },function(){
      clearParagraph();
  });

  function clearParagraph(){
        return $("p").empty();
  }

  function showParagraph(text){
       return $("p").html(text);
  }
});
