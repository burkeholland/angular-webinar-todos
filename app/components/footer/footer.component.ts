import {Component} from 'angular2/core';

@Component({
    selector: 'Footer',
    template: `
<StackLayout>
    <StackLayout class="horizontal-line"></StackLayout>
    <StackLayout class="bottom-1"></StackLayout>
    <StackLayout class="bottom-1-line"></StackLayout>
    <StackLayout class="bottom-2"></StackLayout>
    <StackLayout class="bottom-2-line"></StackLayout>
</StackLayout>  
    `,
    styleUrls: ['components/footer/footer.css']
})
export class FooterComponent {}