export default function (ctx, inject) {
    let api = {
        path: "api path",
        call() {
            console.log("api plugin");
        }
    }

    ctx.$myCustomApiPlugin = api
    inject('myCustomApiPlugin', api)
}
     