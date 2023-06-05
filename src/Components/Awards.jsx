import React from 'react';

import { Button } from '@mui/material';
import './Styles/Awards.css'



const Awardss = () => {
    return (
        <div className='container'>

            <div><h1 className='text-center'>Mukofotlar</h1></div>
            <hr className='w-75 m-auto' />
            <div className=''>
                <h2 className='mt-3'>O'zbekiston Respublikasi Prezidenti mukofoti</h2>

                <div className='d-flex justify-content-between'>
                    <div className=' m-3 p-3 divimg  col-5'>
                        <img className='rounded-3 nominationImg' height={300} src="https://turkic.world/media/2023/05/17/obs6en7wquxhhzd8cnfaon64shnp3r2l_front.jpg" alt="" />

                    </div>
                    <div>
                        <div className='m-3 p-3 shadow p-3 mb-5 bg-body-tertiary rounded rounded-3 col-7 w-100'>
                            <p>Abel mukofoti (inglizcha: Abelprisen; norv.: Abelprisen) — har yili Norvegiya qiroli tomonidan bir yoki undan koʻp matematikka ilmga qoʻshgan yirik hissasi uchun beriladigan mukofot. Mukofot norveg matematigi Niels Henrik Abel (1802–1829) nomi bilan ataladi va Nobel mukofotiga qarab taʼsis qilingan. Mukofot sovrindorlariga 6 million norveg kronasi (€600,000 yoki $660,000) miqdorida pul mukofoti beriladi. Mukofotning kelib chiqishi 1899-yilga borib taqaladi. Norveg matematigi Sophus Lie Alfred Nobelning mukofotlari matematiklarga berilmasligi haqida xabar topganidan keyin, matematiklar uchun alohida mukofot joriy qilishni taklif qilgan.</p>
                            <br /><a href="https://uz.wikipedia.org/wiki/Abel_mukofoti"><Button className='' variant="outlined">Batafsil  </Button></a>

                        </div>
                    </div>
                </div>
                <iframe width="100%" height="915" src="https://www.youtube.com/embed/rtKSr_3H-pU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h2 className='mt-5'>Abel Mukofoti</h2>
                <div className='d-flex justify-content-between'>
                    <div className=' m-3 p-3 divimg col-5'>
                        <img className='rounded-3 nominationImg' height={300} src="data:image/jpeg;base64,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" alt="" />

                    </div>
                    <div>
                        <div className='m-3 p-3 shadow p-3 mb-5 bg-body-tertiary rounded rounded-3 col-6 w-100'>
                            <p>Abel mukofoti (inglizcha: Abelprisen; norv.: Abelprisen) — har yili Norvegiya qiroli tomonidan bir yoki undan koʻp matematikka ilmga qoʻshgan yirik hissasi uchun beriladigan mukofot. Mukofot norveg matematigi Niels Henrik Abel (1802–1829) nomi bilan ataladi va Nobel mukofotiga qarab taʼsis qilingan. Mukofot sovrindorlariga 6 million norveg kronasi (€600,000 yoki $660,000) miqdorida pul mukofoti beriladi.

                                Mukofotning kelib chiqishi 1899-yilga borib taqaladi. Norveg matematigi Sophus Lie Alfred Nobelning mukofotlari matematiklarga berilmasligi haqida xabar topganidan keyin, matematiklar uchun alohida mukofot joriy qilishni taklif qilgan.</p>
                            <br /><br /><br /><a href="https://uz.wikipedia.org/wiki/Abel_mukofoti"><Button className='' variant="outlined">Batafsil  </Button></a>

                        </div>
                    </div>
                </div>
                <hr className='w-75 m-auto mb-5' />
                <div><h2 className='mt-5'>Mukofot Sohiblari</h2>


                </div>
                <h2 className='mt-3'>Fields Mukofoti</h2>

                <div className='d-flex justify-content-between'>
                    <div className=' m-3 p-3 divimg col-5'>
                        <img className='rounded-3 nominationImg' height={350} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/FieldsMedalFront.jpg/800px-FieldsMedalFront.jpg" alt="" />

                    </div>
                    <div className='d-flex  col-7 '>
                        <div className='m-3 p-3 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <p>Fields medali (talaffuzi: Filds) (inglizcha: Fields Medal) — 40 yoshga toʻlmagan matematiklarga Xalqaro matematika ittifoqi tomonidan beriladigan mukofot. Medal toʻrt yilda bir marta Xalqaro matematiklar kongressida ikki, uch yoki toʻrt matematikka beriladi. Mukofot ittifoqning Xalqaro kongressida topshiriladi.

                                Fields medali matematiklarga beriladigan eng yuqori sharaflardan biri hisoblanadi va u „matematiklarning Nobel mukofoti“ deb taʼriflanadi. Ammo ikki mukofot oʻrtasida bir qancha muhim farqlar mavjud. ARWU tomonidan har yili oʻtkaziladigan akademik mukammallik soʻroviga koʻra, Fields medali butun dunyo boʻylab matematika boʻyicha eng aʼlo mukofot sifatida koʻriladi. 2013-2014-yillarda IREG tomonidan oʻtkazilgan yana bir soʻrovda Fields Medali matematika boʻyicha Abel mukofotidan keyingi ikkinchi eng nufuzli xalqaro mukofot deb topildi.</p><br /><a href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D0%B4%D1%81%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%8F"><Button variant="outlined">Batafsil  </Button></a>

                        </div>
                    </div>
                </div>

                <div className='z-1'><h2 className='mt-5'>Mukofot Sohiblari </h2>

                </div>
            </div>
        </div>
    );
}

export default Awardss;
