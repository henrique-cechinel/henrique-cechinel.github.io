app.controller('SoftwareController', function($scope) {
    $scope.message = 'Hello from SoftwareController';

    $scope.softwareList = [
        {
            header: "Generic Tools",
            items: [
                {url: "https://www.google.com/intl/pt-BR/chrome/", description: "Google Chrome"},
                {url: "https://vlc-media-player.br.uptodown.com/windows", description: "VLC Player"},
                {url: "https://account.microsoft.com/services/office/install", description: "Office 365"},
                {url: "https://discord.com/download", description: "Discord"},
                {url: "https://www.msi.com/page/afterburner", description: "MSI Afterburner"},
                {url: "https://www.nvidia.com/en-us/geforce/geforce-experience/download/", description: "GeForce Experience"},
                {url: "https://www.win-rar.com/predownload.html?&L=9", description: "WinRar"},
                {url: "https://app.prntscr.com/pt-br/download.html", description: "LightShot"},
                {url: "https://www.logitech.com/pt-br/software/logi-options-plus.html", description: "Logi Options+"},
                {url: "https://www.virtualbox.org/wiki/Downloads", description: "Virtual Box"}
            ]
        },
        {
            header: "Programming",
            items: [
                {url: "https://www.sublimetext.com/", description: "Sublime Text"},
                {url: "https://code.visualstudio.com/download", description: "Visual Studio Code"},
                {url: "https://git-scm.com/downloads", description: "Git"},
                {url: "https://nodejs.org/en/download/", description: "Node"},
                {url: "https://www.getpostman.com/downloads/", description: "Postman"},
                {url: "https://www.oracle.com/br/java/technologies/downloads/#jdk19-windows", description: "Java JDK"},
                {url: "https://www.genymotion.com/download/", description: "Genymotion"},
                {url: "https://www.adobe.com/br/products/xd.html", description: "Adobe Xd"}
            ]
        },
        {
            header: "3D Printing",
            items: [
                {url: "http://www.meshmixer.com/download.html", description: "Meshmixer"},
                {url: "https://ultimaker.com/software/ultimaker-cura", description: "Cura"}
            ]
        }
    ]
});