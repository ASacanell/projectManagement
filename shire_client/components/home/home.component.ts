import { Component } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
	selector: "home",
	template: 
		`<div class="ui container">
			<sm-segment class="raised">
				<h1>Landpage</h1>
				<sm-list class="ui list bulleted">
					<sm-item class="item">username: nodeepshit</sm-item>				
					<sm-item class="item">password: password123</sm-item>
				</sm-list>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue tortor, dictum quis accumsan sed, ultrices non nisi. Fusce convallis libero risus, nec rutrum enim tristique sit amet. Mauris rutrum justo eu tristique accumsan. Fusce porta interdum ultrices. Vivamus eu sodales quam. Suspendisse dapibus velit neque, nec mollis massa mattis a. Ut a hendrerit lacus. Maecenas tempus pulvinar finibus. Curabitur maximus sed eros in condimentum.  
				</p>
			</sm-segment>
			<br/>
		</div>`
	// CAREFUL: templateUrl doesn't work appropriately
	// templateUrl: 'shire_app/views/home.view.html'
})
export class HomeComponent {
	
}