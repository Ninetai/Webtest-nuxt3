<template>
     <section>
        <h2 class="no-margin">properties</h2>
        <div id="propertiesDiv">
            <div id="propertiesSelectDiv">
            <div id="deviceDiv">
                <p class="no-margin">Device geometry:<br/>
                <table id="geometryTable"> 
                    <tr><td class="name">Default ad size (w x h):</td>
                        <td class="value">
                            <input id="adWidth" name="adWidth" class="dimension" value="320" onchange="devicesizeWidget.updatePreview()"/>x
                            <input id="adHeight" name="adHeight" class="dimension" value="50" onchange="devicesizeWidget.updatePreview()"/>
                        </td>
                    </tr>
                    <tr><td class="name">Default ad position (left, top):</td>
                        <td class="value">
                            <input id="adLeft11" name="adLeft" class="dimension" value="0" onchange="devicesizeWidget.updatePreview()"/>,
                            <input id="adTop11" name="adHeight" class="dimension" value="50" onchange="devicesizeWidget.updatePreview()"/>
                        </td>
                    </tr>
                    <tr><td class="name">Max ad size (w x h):</td>
                        <td class="value">
                            <input id="adMaxWidth" name="adMaxWidth" class="dimension" value="320"/>x
                            <input id="adMaxHeight" name="adMaxHeight" class="dimension" value="480" onchange="devicesizeWidget.updatePreview()"/>
                        </td>
                    </tr>
                    <tr><td class="name">Max ad position (left, top):</td>
                        <td class="value">
                            <input id="adMaxLeft" name="adMaxLeft" class="dimension" value="0" onchange="devicesizeWidget.updatePreview()"/>,
                            <input id="adMaxTop" name="adMaxTop" class="dimension" value="0" onchange="devicesizeWidget.updatePreview()"/>
                        </td>
                    </tr>
                    <tr><td class="name">Screen size (w x h):</td>
                        <td class="value">
                            <input id="screenWidth" name="screenWidth" class="dimension" value="320" onchange="devicesizeWidget.updatePreview()" />x
                            <input id="screenHeight" name="screenHeight" class="dimension" value="480" onchange="devicesizeWidget.updatePreview()" />
                        </td>
                    </tr>
                </table>
                </p>
            </div>
            
            <div id="placementDiv">
                <p class="no-margin">API version to test: 
                    <select name="version">
                        <option value="1.0">MRAID v1</option>
                        <option value="2.0" >MRAID v2</option>
                    </select>
                </p>
                <p class="no-margin">Placement: 
                    <select name="placement">
                        <option value="inline" >Inline</option>
                        <option value="interstitial">Interstitial</option>
                    </select>
                    <br/>
                    <input id="offscreen" name="offscreen" type="checkbox"/>Off-screen
                </p>
            </div>

            <div id="capabilitiesDiv">
                <p class="no-margin">Native features to emulate:
                    <ul id="capabilitiesList">
                        <li><input id="',feature,'" name="',feature,'" type="checkbox"  /> name</li>
                                
                    </ul>
                </p>
            </div>
            </div>
            <input type="button" value="Next" onclick="nextStep()" />
        </div>
        <div></div>
        <div id="devicePreviewDiv">
            <!-- <div id="resizable-screensize" class="ui-widget-content ui-resizable" style="float:left">
                <p class="ui-widget-header">screen size</p>
                <div id="resizable-maxAdSize" class="ui-widget-content">
                    <p class="ui-widget-header">max ad area &amp; placement</p>
                    <div id="resizable-initialAdSize" class="ui-widget-content">
                        <p class="ui-widget-header">initial ad area &amp; placement</p>
                    </div>
                </div>
            </div> -->

            <div class="drag" id="resizable-screensize" style="top:100px;left:500px"><p>screen size</p>
                <div class="handle SE"></div>
            </div>
            <div class="drag" id="resizable-maxAdSize" style="top:100px;left:500px"><p>max ad area &amp; placement</p>
                <div class="handle SE"></div>
            </div>xx
            <div class="drag" id="resizable-initialAdSize" style="top:100px;left:500px"><p>initial ad area &amp; placement</p>
                <div class="handle SE"></div>
            </div>
        </div>
    </section>
 </template>

 <script setup>
$(document).ready(function(){
        $('#tabs').indicatedTabs("#content section", {}, {});
        devicesizeWidget.init();
        orientationWidget.init();
        load();

        var adtag = getQueryStringValue('adtag'), 
            fragmentArea;

        if (adtag  && adtag !== '') {
            setTimeout(function () {
                fragmentArea = document.getElementById('adFragment');
                if (fragmentArea) {
                    fragmentArea.value =  decodeURIComponent(adtag);
                }
            }, 1000);
        }
	});
 </script>