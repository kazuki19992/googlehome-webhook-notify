// const http = require('http');

// const googlehome = require('google-home-notifier');
// const language = 'ja';

// // GoogleHomeを指定
// // ファイルリーダー
// // let reader = new FileReader();

// // // text形式でgooglehomeのデバイス名を読み込む
// // reader.readAsText('googlehome.txt');
// // let deviceName = reader.result;
// let deviceName = 'リビングルーム';

// // // text形式でしゃべらせる言葉を読み込む
// // reader.readAsText('talktext.txt');
// let talkText = 'うんこ';

// // // GoogleHome端末のIPアドレスを取得
// // reader.readAsText('deviceIp.txt');
// // let ipAddress = reader.result;
// let ipAddress = '192.168.1.9';

// // // デプロイ環境のアドレスを取得
// // reader.readAsText('address.txt');
// // let deployAddress = reader.result;
// let deployAddress = '192.168.1.2';


// googlehome.device(deviceName, language);
// googlehome.ip(ipAddress);

// http.createServer(function (req, res){
//     req.on("end", function() {
//         // しゃべらせる
//         googlehome.notify(talkText, function(res) {
//             console.log(res);
//         });
//     });

//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end();
// }).listen(3000, deployAddress);


const http = require('http');

const googlehome = require('google-home-notifier');
googlehome.device('リビングルーム', 'ja');
googlehome.ip('192.168.1.9');

http.createServer(function (req, res) {
    req.on("end", function() {
        googlehome.notify('うんこ', function(res) {
            console.log(res);
        });
    });

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();

}).listen(3000, '192.168.1.2');