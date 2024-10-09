import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { FaqComponent } from './faq/faq.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'protocols', component: ProtocolsComponent},
    {path: 'faq', component: FaqComponent}
];
