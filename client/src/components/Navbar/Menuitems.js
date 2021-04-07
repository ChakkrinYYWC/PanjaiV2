const currentUser_id = localStorage.getItem('currentUser_id')

const Menuitems = [
    {
        id: '001',
        title: 'หน้าแรก',
        href: '/',
        cName: 'nav-links'
    },
    {
        id: '002',
        title: 'ตู้ปันใจ',
        href: '/Too_panjai',
        cName: 'nav-links'
    },
    {
        id: '003',
        title: 'หมวดหมู่มูลนิธิ',
        href: '/#003',
        cName: 'nav-links'
    },
    {
        id: '004',
        title: 'เกี่ยวกับเรา',
        href: '/aboutus',
        cName: 'nav-links'
    },
    {
        id: '005',
        title: 'วิธีใช้',
        href: '/',
        cName: 'nav-links'
    },
    
    {
        id: '006',
        title: 'ข้อมูลส่วนตัว',
        href: '/profile/'+currentUser_id,
        cName: 'nav-links'
    }
 
  
]

export default Menuitems