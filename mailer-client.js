/* ********************************************* *
 * MAILER-CLIENT.JS                              *
 * ********************************************* *
 * Contiene las rutinas para consumir el WCF     *
 * de envio de correos electrónicos.             *
 * ********************************************* *
 * Versión 0.24.10.27                            *
 * ********************************************* */

class Mailer {

    constructor() {
        // Replace this URL with your deployed value.
        window.mailerApiRoot = "https://mailer-api.democenter.lncproducciones.com/mailer/";
    }

    sendMail(params) {
        return $.post(
            window.mailerApiRoot + "send",
            params
        );
    }

    makeSettings(server, port, username, password) {
        return {
            server: server,
            port: port,
            userName: username,
            password: password
        };
    }

    makeMessage(from, fromname, to, toname, subject, body, ishtml) {
        return {
            fromAddress: from,
            fromName: fromname,
            toAddress: to,
            toName: toname,
            subject: subject,
            body: body,
            isHtml: ishtml
        };
    }

    makeParameters(settings, message) {
        return {
            settings: settings,
            msg: message
        };
    }
}

const mailer = new Mailer();