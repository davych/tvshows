import List from './List';
import Detail from './Detail';

export const TVShowRouter = {
    path: '/',
    element: <List />,
    children: [
        {
            path: ':number',
            element: <Detail />
        }
    ]
}