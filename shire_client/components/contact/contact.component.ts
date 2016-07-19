import { Component } from "@angular/core";

@Component({
    selector: "home",
    template: 
	    `<sm-segment>
		    Find us on: 
		    <p>Alexander SN <a href="https://github.com/asacanelln" target="_blank">https://github.com/asacanelln</a></p>
		    <p>Carlos J. GS SN <a href="https://github.com/a" target="_blank">https://github.com/a</a></p>
		    <p>Gabriel GC <a href="https://github.com/oka-haist" target="_blank">https://github.com/oka-haist</a></p>
		    <p>Sergio LJ <a href="https://github.com/a" target="_blank">https://github.com/a</a></p>
		</sm-segment>`
	// CAREFUL: templateUrl doesn't work appropriately
    // templateUrl: `shire_client/views/contact.view.html`
})
export class ContactComponent {}