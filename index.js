const http = require('http');

const googlehome = require('google-home-notifier');
const language = 'ja';

// GoogleHomeを指定
// ファイルリーダー
let reader = new FileReader();

// text形式でgooglehomeのデバイス名を読み込む
reader.readAsText('googlehome.txt');
let deviceName = reader.result;

// text形式でしゃべらせる言葉を読み込む
reader.readAsText('talktext.txt');
let talkText = reader.result;

// GoogleHome端末のIPアドレスを取得
reader.readAsText('deviceIp.txt');
let ipAddress = reader.result;

// デプロイ環境のアドレスを取得
reader.readAsText('address.txt');
let deployAddress = reader.result;


googlehome.device(deviceName, language);
googlehome.ip(ipAddress);

http.createServer(function (req, res){
    req.on("end", function() {
        // しゃべらせる
        googlehome.notify(talkText, function(res) {
            console.log(res);
        });
    });

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
}).listen(3000, deployAddress);
