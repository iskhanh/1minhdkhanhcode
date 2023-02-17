import { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/defaultLayouts';
import { Public } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {Public.map((data, index) => {
                        const Page = data.element;
                        let Layout = DefaultLayout;
                        if (data.layout) {
                            Layout = data.layout;
                        } else if (data.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={data.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
