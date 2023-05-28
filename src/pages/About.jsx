// import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from '../components/Image';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function About() {
    const navigate = useNavigate()


    return (
        <>

            {/* helmet */}
            <div>
                <Helmet>
                    <title>About</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>
            <Header />
            <main className='text-black'>
                <section className='bg-primary py-20'>
                    <div className='flex flex-col md:flex-col-2 lg:grid lg:grid-cols-2 gap-10 p-14'>
                        <div className=' flex justify-center'>
                            <img src={Image.logposeWhite} alt="" className='w-72 lg:w-[60%]  self-center' />
                        </div>
                        <div className='flex flex-col text-secondary gap-10'>
                            <div className='font-black text-[2em]'>
                                <q>
                                    Knowledge is power
                                </q>
                                <br />
                                - Francis Bacon
                            </div>
                            <span className='text-md text-justify'>
                                Log Pose News: Menyelami Samudera Berita yang Luas, Mengungkap Misteri dengan Kisah yang Mendalam, Mengantarkanmu ke Tanah Berita yang Terpercaya dan Akurat. Bergabunglah dalam Perjalanan Epik, di Mana Tiap Rute adalah Petualangan yang Memikat, Tiap Berita adalah Harta Karun yang Berharga. Tidak Ada Batasan Waktu atau Ruang, Kami Menjelajahi Benua Informasi untuk Membawa Kabar Terbaru dengan Kecepatan Kilat, Menghanyutkanmu dalam Arus Wawasan Terkini yang Menginspirasi, Mengubah, hingga Mendarat di Pulau Terakhir: Informasi yang Terpercaya dan Akurat, sebagai Kunci Utama Pemahaman Dunia yang Sebenarnya.
                            </span>
                        </div>
                    </div>
                </section>
                <section className='py-20 px-14 text-lg bg-secondary text-primary font-extrabold flex flex-col items-center gap-10'>
                    <div className='text-justify lg:mx-32'>
                        <q>
                            Informasi adalah kunci untuk membuka pintu misteri dan mengungkap kebenaran. Mari terus berjuang untuk mengumpulkan dan membagikan informasi demi kemajuan umat manusia.
                        </q>
                        <br />
                        <span> - Professor Clover One Piece</span>
                    </div>
                    <div>
                        <span>Ayo Bersama-sama, Menerangi Dunia dengan Informasi Akurat!</span>
                    </div>
                    <button
                        onClick={() => navigate('/auth/register')}
                        className='btn btn-primary w-32'>
                        Join
                    </button>
                </section>
                <section className='py-20'>
                    <div className='flex flex-col md:flex-col-2 lg:grid lg:grid-cols-2 gap-10 p-14'>
                        <span className='text-justify'>
                            Sindikat Lima Pilar adalah sebuah kelompok yang terdiri dari lima individu pilihan yang menjadi pilar utama dalam menjalankan tugas-tugas yang kompleks dan menantang. Setiap anggota tim adalah sosok yang memperlihatkan kekuatan, kecerdasan, dan keterampilan yang tak tertandingi dalam bidangnya masing-masing. Mereka bersatu sebagai satu kesatuan yang solid dan menghadirkan harmoni sempurna di tengah-tengah kesibukan. Nama ini mencerminkan kekuatan kolaborasi mereka dalam menjalankan operasi-operasi yang rumit, strategis, dan penuh tantangan. Sindikat Lima Pilar mewakili semangat kekompakan, inovasi, dan ketepatan dalam mencapai tujuan bersama.
                        </span>
                        <div className='flex justify-center'>
                            <img src={Image.logoTim} alt="" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
