import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';
import InstagramFeed from 'react-ig-feed';
import './ig-feed.css';

import arrowBack from 'assets/images/arrow-back.svg';
import instagramLogo from 'assets/images/instagram-green.svg';
import relatosMain from 'assets/images/relatos-main.jpg';
import relatosOne from 'assets/images/relatos1.jpg';
import relatosTwo from 'assets/images/relatos2.jpg';

const RelatosVisualesPage = () => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();

    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scroll(0, 0);
        setColorScheme('green');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="lg:text-xl lg:leading-10 font-medium pb-48">
            <div className="bg-beige md:min-h-screen">
                <div className="w-5/6 xl:w-4/6 mx-auto text-green py-20 md:h-[140vh]">
                    <div onClick={() => navigate('/proyectos')} className="relative cursor-pointer z-50">
                        <img src={arrowBack} alt="" />
                    </div>

                    <div className="flex items-center">
                        <span
                            className="grid place-content-center shrink-0 bg-green text-darkGreen 
                                                font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                                mt-12 mr-8"
                        >
                            3
                        </span>
                        <h2 className="text-4xl font-bold font-primary">
                            relatos{' '}
                            <span className="relative top-12 font-secondary text-6xl md:text-8xl">visuales</span>
                        </h2>
                    </div>

                    <div className="md:h-screen w-full flex justify-center mt-16 md:mt-36">
                        <img className="h-full" src={relatosMain} alt="relatos visuales" />
                    </div>
                </div>
            </div>

            <div className="bg-green text-beige w-full">
                <div className="w-5/6 xl:w-4/6 mx-auto py-16 md:pt-[30vh] md:pb-[30vh]">
                    <p>
                        Hay una memoria colectiva que nos susurra al o??do, como el viento, la estamos oyendo???
                        <br />
                        Relatos visuales es un proyecto colectivo colaborativo de lenguaje pl??stico/visual, donde
                        buscamos, a partir de la experiencia del trabajo de campo por medio de entrevistas en un
                        compartir fluido con les protagonistas de esta narrativa, visibilizar, revalorizar y poner en
                        dialogo con el contexto actual, historias que hacen a nuestra cultura regional, que est??n
                        impresas en las memorias corporales y constituyen tambi??n nuestras subjetividades.
                    </p>
                </div>
            </div>

            <div className="bg-beige text-green w-full">
                <div className="w-5/6 xl:w-4/6 mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-4">
                    <div className="flex-1">
                        <p className="mt-16 md:mt-24">
                            Dialogamos a trav??s de diversos soportes pl??sticos: cer??mica, pintura, dibujo, mural e
                            ilustraci??n digital, donde cobrar??n cuerpo las historias que intencionamos comunicar desde
                            lo sensible.
                        </p>
                        <p className="mb-16 md:mb-24">
                            Relatos visuales es un camino que vamos abriendo entre mujeres artistas de la Provincia de
                            Misiones.
                        </p>
                    </div>

                    <div className="md:flex-1 w-full md:w-auto h-[40vh] md:h-auto overflow-hidden md:overflow-visible md:translate-x-[20%] md:translate-y-[-10%] mt-16 md:mt-0">
                        <img className="w-full" src={relatosOne} alt="relatos audiovisuales 1" />
                    </div>
                </div>
            </div>

            <div className="md:h-[150vh] w-full">
                <img src={relatosTwo} alt="relatos audiovisuales 2" className="w-full h-full object-cover" />
            </div>

            <div className="bg-beige text-green w-full py-16 md:pt-48">
                <div className="w-5/6 xl:w-4/6 mx-auto flex items-center justify-center">
                    <p>
                        Ser MESTIZAS en tiempos contempor??neos, cambios de escenario, de tiempos y de costumbres
                        <br />
                        Ser mujer
                        <br />
                        ser mujer a secas
                        <br />
                        ser mujer de monte endurecer el cuero, el cuerpo, esconder las emociones y esa creencia que lo
                        seguro es masculinizar el ser, lo cuestionamos, lo dialogamos escuchamos sus historias
                        <br />
                        Es la conexi??n con la tierra, el todo y los saberes, la magia, la maga, la bruja del monte.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-16 md:mt-32 mb-16">
                <img className="mr-4 h-8" src={instagramLogo} alt="" />
                <span className="text-green font-medium text-xl">seguinos en instagram</span>
            </div>

            <div className="w-5/6 xl:w-4/6 mx-auto min-h-screen">
                <InstagramFeed token={process.env.REACT_APP_RELATOS_VISUALES_INSTAGRAM_TOKEN} counter="9" />
            </div>
        </div>
    );
};

export default RelatosVisualesPage;
