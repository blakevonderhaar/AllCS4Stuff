
      


      function successChange(data) { 
        if (!data)
          alert("ERROR");
      }
    
      $(document).ready(
        function()
        {

          $("form").submit(
          function(event)
          {

            if ($("#fileStuff").val() == "") {
              alert("NO IMAGE");
              return false;
            }

            $.post("/upload",{},successChange);


          });
        });


