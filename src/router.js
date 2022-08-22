import { TVShowRouter } from '../src/modules/tvshow/router';
import { useRoutes } from 'react-router-dom';

export const AppRouter = () => {
    const element = useRoutes([
        TVShowRouter
    ]);
    return element;
};