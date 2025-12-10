$(document).ready(function () {
    $("#changeColorBtn").click(function () {
        const colors = [
            "linear-gradient(135deg, #ff9a9e, #fad0c4)",
            "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
            "linear-gradient(135deg, #d4fc79, #96e6a1)",
            "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
        ];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        $("body").css("background", randomColor);
    });
});
