const currentUser_id = localStorage.getItem('currentUser_id')

const Menuitems = [
    {
        id: '001',
        title: 'หน้าแรก',
        href: '/',
        cName: 'nav-links',
        for : "all"
    },
    {
        id: '002',
        title: 'ตู้ปันใจ',
        href: '/Too_panjai',
        cName: 'nav-links',
        for : "all"
    },
    {
        id: '003',
        title: 'หมวดหมู่มูลนิธิ',
        href: '/#003',
        cName: 'nav-links',
        for : "all"
    },
    {
        id: '004',
        title: 'เกี่ยวกับเรา',
        href: '/aboutus',
        cName: 'nav-links',
        for : "user"
    },
    {
        id: '005',
        title: 'วิธีใช้',
<<<<<<< HEAD
        href: '/',
        cName: 'nav-links',
        for : "all"
=======
        href: '/tutorial',
        cName: 'nav-links'
>>>>>>> 1eb13f50c639835466600bf808c4280cc7a63d5b
    },
    
    {
        id: '006',
        title: 'ข้อมูลส่วนตัว',
        href: '/profile/'+currentUser_id,
        cName: 'nav-links',
        for : "all"
    }
    ,
    // {
    //     id: '007',
    //     title: 'ใกล้ฉัน',
    //     href: '/testaroundme',
    //     cName: 'nav-links'
    // }
 
  
]

export default Menuitems