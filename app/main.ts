/**
 * Created by vincebloise on 6/11/16.
 */
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>Hello {{ name }}!</h1>`
})
class AppComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2, mo fo, sit!';
    }
}

bootstrap(AppComponent);