<template>
     <section>
        <div id="consoleDiv">
            <h2 class="no-margin">console</h2>
            <div class="consoleFrame"><code id="console"></code></div>
            <em><input id="logError" type="checkbox" > Error
                <input id="logInfo" type="checkbox" > Info
                <input type="button" value="Clear" onclick="document.getElementById('console').innerHTML = ''">
            </em>
        </div>
        <div id="controlsDiv">
            <h2 class="no-margin">controls</h2>
            <div id="orientationDiv" class="mraid-widget">
                <div id="orientationToggle" class="portrait"></div>
                <div id="orientationTiming" type="button" onclick="orientationWidget.toggleOrientationTiming()" class="t-off"></div>
                <p class="formValues"><span class="value">
                <select name="orientationState" id="orientationState">
                    <option value="portrait">portrait</option>
                    <option value="landscape">landscape</option>
                </select>
                </span>
                </p>
            </div>
        </div>
    </section>
 </template>