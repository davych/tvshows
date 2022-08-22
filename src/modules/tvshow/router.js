import Detail from './Detail';
import DefaultLayout from '../../layout/DefaultLayout';
import DetailLayout from '../../layout/DetailLayout';

export const TVShowRouter = {
    path: '/',
    element: <DefaultLayout />,
    children: [
        {
            path: "tvshows",
            element: <DetailLayout />,
            children:[
                {
                    path: 'detail/:number',
                    element: <Detail />
                }
            ]
        },
        
    ]
}