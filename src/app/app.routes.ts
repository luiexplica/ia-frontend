import { Routes } from '@angular/router';
import PublicComponent from './modules/public/public.component';
// import { PublicComponent } from './modules/public/public.component';

export const routes: Routes = [

    {
        path: '',
        component: PublicComponent,
        children: [
            // {
            //     path: 'orthography',
            //     loadComponent: () =>
            //         import(
            //             './modules/public/public.component'
            //         ),
            //     data: {
            //         icon: 'fa-solid fa-spell-check',
            //         title: 'Ortografía',
            //         description: 'Corregir ortografía',
            //     },
            // },

        ]

    }

];
