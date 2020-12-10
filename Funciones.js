$(function(){
    var textArea = $('#inputprincipal');
    var hiddenDiv = $(document.createElement('div'));
    var inputprincipal = null;
    
    textArea.addClass('noscroll');
    hiddenDiv.addClass('hiddendiv');
    
    $(textArea).after(hiddenDiv);
    
    textArea.on('keyup', function(){
        inputprincipal = $(this).val();
        inputprincipal = inputprincipal.replace(/n/g, '<br>');
        hiddenDiv.html(inputprincipal + '<br class="line">');
        $(this).css('height', hiddenDiv.height());
    });
});
