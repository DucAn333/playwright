import { Page } from '@playwright/test';

export class home_page{
    page : Page;
    constructor(page :Page){
        this.page = page;
    }

}