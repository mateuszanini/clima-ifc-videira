var url = 'http://clima.videira.ifc.edu.br/estatisticas/image/downld02.txt';

function myFunction() {
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());

    return response.getContentText();

}

function doGet() {
    return HtmlService
        .createTemplateFromFile('index')
        .evaluate()
        .setTitle('Clima | IFC Videira')
        .setFaviconUrl('http://www.myiconfinder.com/uploads/iconsets/256-256-e154aa56822591b968cc98ae9c72dd57.png')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}