import React from 'react';

const Dashboard = React.lazy(() => import('../views/Dashboard'))
const AkunBank = React.lazy(() => import('../views/Master/AkunBank'))
const CreateAkunBank = React.lazy(() => import('../views/Master/AkunBank/Create'))
const Buyer = React.lazy(() => import('../views/Master/Buyer'))
const Supplier = React.lazy(() => import('../views/Master/Supplier'))
const Satuan = React.lazy(() => import('../views/Master/Satuan'))
const BarangGarment = React.lazy(() => import('../views/Master/BarangGarment'))
const BuyerGarment = React.lazy(() => import('../views/Master/BuyerGarment'))
const BrandBuyerGarment = React.lazy(() => import('../views/Master/BrandBuyerGarment'))
const TargetOmzetDivisiGarment = React.lazy(() => import('../views/Master/TargetOmzetDivisiGarment'))
const SupplierGarment = React.lazy(() => import('../views/Master/SupplierGarment'))
const Barang = React.lazy(() => import('../views/Master/Barang'))
const PajakPPH = React.lazy(() => import('../views/Master/PajakPPH'))
const Budget = React.lazy(() => import('../views/Master/Budget'))
const MataUangTekstil = React.lazy(() => import('../views/Master/MataUangTekstil'))
const Divisi = React.lazy(() => import('../views/Master/Divisi'))
const Kategori = React.lazy(() => import('../views/Master/Kategori'))
const Unit = React.lazy(() => import('../views/Master/Unit'))
const JenisMesin = React.lazy(() => import('../views/Master/JenisMesin'))
const Mesin = React.lazy(() => import('../views/Master/Mesin'))
const Instruksi = React.lazy(() => import('../views/Master/Instruksi'))
const DealTracking = React.lazy(() => import('../views/Sales/DealTracking'))
const Board = React.lazy(() => import('../views/Sales/DealTracking/Board'))

const routes = [
    { path: '/Dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/AkunBank', name: 'AkunBank', component: AkunBank },
    { path: '/CreateAkunBank', name: 'CreateAkunBank', component: CreateAkunBank },
    { path: '/Buyer', name: 'Buyer', component: Buyer },
    { path: '/Supplier', name: 'Supplier', component: Supplier },
    { path: '/Satuan', name: 'Satuan', component: Satuan },
    { path: '/BarangGarment', name: 'BarangGarment', component: BarangGarment },
    { path: '/BuyerGarment', name: 'BuyerGarment', component: BuyerGarment },
    { path: '/BrandBuyerGarment', name: 'BrandBuyerGarment', component: BrandBuyerGarment },
    { path: '/TargetOmzetDivisiGarment', name: 'TargetOmzetDivisiGarment', component: TargetOmzetDivisiGarment },
    { path: '/SupplierGarment', name: 'SupplierGarment', component: SupplierGarment },
    { path: '/Barang', name: 'Barang', component: Barang },
    { path: '/PajakPPH', name: 'PajakPPH', component: PajakPPH },
    { path: '/Budget', name: 'Budget', component: Budget },
    { path: '/MataUangTekstil', name: 'MataUangTekstil', component: MataUangTekstil },
    { path: '/Divisi', name: 'Divisi', component: Divisi },
    { path: '/Kategori', name: 'Kategori', component: Kategori },
    { path: '/Unit', name: 'Unit', component: Unit },
    { path: '/JenisMesin', name: 'JenisMesin', component: JenisMesin },
    { path: '/Mesin', name: 'Mesin', component: Mesin },
    { path: '/Instruksi', name: 'Instruksi', component: Instruksi },
    { path: '/DealTracking', name: 'DealTracking', component: DealTracking },
    { path: '/Board', name: 'Board', component: Board }
]

export default routes;