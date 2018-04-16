import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Angulartics2 } from 'angulartics2';
import { omnitureConfig } from './omniture-config';

declare const _satellite: any;
declare var digitalData: any;
declare var s_dtm: any;

@Injectable()
export class angulartics2DTM {

    private config: omnitureConfig;

  constructor(private angulartics2: Angulartics2, private location: Location) {

    this.config = new omnitureConfig();

    this.angulartics2.pageTrack.subscribe((x: any) => this.pageTrack(x.path));

    this.angulartics2.eventTrack.subscribe((x: any) => this.eventTrack(x.action, x.properties));

    //this.angulartics2.setUserProperties.subscribe((x: any) => this.setUserProperties(x));
  }

  pageTrack(path: string) {
	var result = this.config.getOmniturePageConfig(path);
    digitalData = {
        settings: {
            reportSuites: result.pageConfig.reportSuites || ""
        },
        page: {
            pageInfo: {
                pageName: result.pageInfo.pageName || "",
                server: result.pageConfig.server || "",
                platform: result.pageConfig.platform || ""
            },
            category: {
                primaryCategory: result.category.primaryCategory || "",
                pageType: result.category.pageType || ""
            }
        },
        content: {
            artist: result.pageConfig.artistName || "",
            label: result.pageConfig.label || "",
            sublabel: result.pageConfig.sublabel || ""
        }
    };
    if (typeof _satellite !== 'undefined' && _satellite) {
        _satellite.pageBottom();
    }
  }

  /**
   * Track Event in Adobe Analytics
   * @name eventTrack
   *
   * @param action Required 'action' (string) associated with the event
   * @param properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
   *
   * @link https://marketing.adobe.com/resources/help/en_US/sc/implement/js_implementation.html
   */
  eventTrack(action: string, properties: any) {
    
    alert(action);
    //console.info("alert(action);");
    //console.info(properties)
    let eventMessage = this.config.getCustomOmnitureForEvent(properties.action, properties.label);
    let omniVars = {
        "events" : "event63",
        "linkTrackEvents" : "event63",
    };

    if(eventMessage){
        let omniVars =  eventMessage.omniVars;   
    }

    let s_account = "";

    if (typeof digitalData !== 'undefined' && digitalData) {
        s_account = digitalData.settings.reportSuites;
        let description = s_dtm.pageName + ':'+properties.label+':' + action + properties.eventType;
        if(eventMessage) description = s_dtm.pageName + ':'+eventMessage.message;
        this.OmniPrep(omniVars, description);
    }

  }

    private OmniPrep(omniVars, description) {

        if (typeof omniVars === "string") {
            s_dtm.linkTrackVars = 'events';
            s_dtm.linkTrackEvents = omniVars;
            s_dtm.events = omniVars;
        } else {
            s_dtm.linkTrackVars = Object.keys(omniVars);
            s_dtm = Object.assign(s_dtm, omniVars);
        }
        s_dtm.tl(this, 'o', description);
    }

  private setPageName() {
    
  }

}
