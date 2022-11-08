<template>
    <header>
        <div id="webtester-logo"></div>
    </header>

    <nav>
        <ul id='tabs'>
            <li><a href="#tabs-1">Prepare</a></li>
            <li><a href="#tabs-2">Flight</a></li>
            <li><a href="#tabs-3">Test</a></li>
        </ul>
        <span id='indicator'></span>
    </nav>

    <form id="setup" name="setup" onsubmit="renderAd(); return false">
        <div id="content">
            <section>
                <h2 class="no-margin">properties</h2>
                <div id="propertiesDiv">
                    <div id="propertiesSelectDiv">
                        <div id="deviceDiv">
                            <p class="no-margin">Device geometry:<br />
                            <table id="geometryTable">
                                <tr>
                                    <td class="name">Default ad size (w x h):</td>
                                    <td class="value">
                                        <input id="adWidth" name="adWidth" class="dimension" value="320"
                                            onchange="devicesizeWidget.updatePreview()" />x<input id="adHeight"
                                            name="adHeight" class="dimension" value="50"
                                            onchange="devicesizeWidget.updatePreview()" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="name">Default ad position (left, top):</td>
                                    <td class="value">
                                        <input id="adLeft" name="adLeft" class="dimension" value="0"
                                            onchange="devicesizeWidget.updatePreview()" />,<input id="adTop"
                                            name="adTop" class="dimension" value="430"
                                            onchange="devicesizeWidget.updatePreview()" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="name">Max ad size (w x h):</td>
                                    <td class="value">
                                        <input id="adMaxWidth" name="adMaxWidth" class="dimension" value="320" />x<input
                                            id="adMaxHeight" name="adMaxHeight" class="dimension" value="480"
                                            onchange="devicesizeWidget.updatePreview()" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="name">Max ad position (left, top):</td>
                                    <td class="value">
                                        <input id="adMaxLeft" name="adMaxLeft" class="dimension" value="0"
                                            onchange="devicesizeWidget.updatePreview()" />,<input id="adMaxTop"
                                            name="adMaxTop" class="dimension" value="0"
                                            onchange="devicesizeWidget.updatePreview()" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="name">Screen size (w x h):</td>
                                    <td class="value">
                                        <input id="screenWidth" name="screenWidth" class="dimension" value="320"
                                            onchange="devicesizeWidget.updatePreview()" />x<input id="screenHeight"
                                            name="screenHeight" class="dimension" value="480"
                                            onchange="devicesizeWidget.updatePreview()" />
                                    </td>
                                </tr>
                            </table>
                            </p>
                        </div>

                        <div id="placementDiv">
                            <p class="no-margin">API version to test:
                                <select name="version">
                                    <option value="1.0">MRAID v1</option>
                                    <option value="2.0" selected="selected">MRAID v2</option>
                                </select>
                            </p>
                            <p class="no-margin">Placement:
                                <select name="placement">
                                    <option value="inline" selected="selected">Inline</option>
                                    <option value="interstitial">Interstitial</option>
                                </select>
                                <br />
                                <input id="offscreen" name="offscreen" type="checkbox" />Off-screen
                            </p>
                        </div>

                        <div id="capabilitiesDiv">
                            <p class="no-margin">Native features to emulate:
                            <ul id="capabilitiesList">
                                <!-- <script type="text/javascript">
                                    var items = [];
                                    for (var feature in features) {
                                        items.push('<li><input id="',feature,'" name="',feature,'" type="checkbox" checked="checked" /> ',features[feature].name,'</li>');
                                    }
                                    document.write(items.join(''));
                                </script> -->
                                <li><input id="',feature,'" name="',feature,'" type="checkbox" checked="checked" />
                                </li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <input type="button" value="Next" onclick="nextStep()" />
                </div>
                <div></div>
                <div id="devicePreviewDiv">
                    <!-- div id="resizable-screensize" class="ui-widget-content ui-resizable" style="float:left">
                    <p class="ui-widget-header">screen size</p>
                    <div id="resizable-maxAdSize" class="ui-widget-content">
                        <p class="ui-widget-header">max ad area &amp; placement</p>
                        <div id="resizable-initialAdSize" class="ui-widget-content">
                            <p class="ui-widget-header">initial ad area &amp; placement</p>
                        </div>
                    </div>
                </div -->

                    <div class="drag" id="resizable-screensize" style="top:100px;left:500px">
                        <p>screen size</p>
                        <div class="handle SE"></div>
                    </div>
                    <div class="drag" id="resizable-maxAdSize" style="top:100px;left:500px">
                        <p>max ad area &amp; placement</p>
                        <div class="handle SE"></div>
                    </div>
                    <div class="drag" id="resizable-initialAdSize" style="top:100px;left:500px">
                        <p>initial ad area &amp; placement</p>
                        <div class="handle SE"></div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h2 class="no-margin">tag source</h2>
                    <div>
                        <!--textarea name="adFragment" id="adFragment" rows="10" ><script src='http://rtr.innovid.com/r1.5637e6df321548.45146407;cb=[timestamp]'></script></textarea><br/-->
                        <textarea name="adFragment" id="adFragment" rows="10"
                            placeHolder="Your HTML fragment here"></textarea><br />
                        <input type="button" value="Render" onclick="renderHtmlAd()" />
                    </div>
                </div>
            </section>

            <section>
                <div id="consoleDiv">
                    <h2 class="no-margin">console</h2>
                    <div class="consoleFrame"><code id="console"></code></div>
                    <em><input id="logError" type="checkbox" checked=""> Error
                        <input id="logInfo" type="checkbox" checked=""> Info
                        <input type="button" value="Clear" onclick="document.getElementById('console').innerHTML = ''">
                    </em>
                </div>
                <div id="controlsDiv">
                    <h2 class="no-margin">controls</h2>
                    <div id="orientationDiv" class="mraid-widget">
                        <div id="orientationToggle" class="portrait"></div>
                        <div id="orientationTiming" type="button" onclick="orientationWidget.toggleOrientationTiming()"
                            class="t-off"></div>
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

        </div>
    </form>

</template>

<script >
  import '../set.js'
     import {nextStep} from 'assets/safari/main.js'
</script>
