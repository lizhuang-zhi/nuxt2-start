export default function(ctx) {
    console.log("secret middleware");
    console.log("我不想让你进入secret页面");
    // ...验证处理
    // 重定向到首页
    ctx.redirect("/");
}