import { lazy } from "react";
import {
    BookOutlined,
    ContactsOutlined,
    DashboardOutlined,
    PieChartOutlined,
    NotificationOutlined,
    SettingOutlined,
    HddOutlined,
    HomeOutlined,
    BankOutlined,
    ScheduleOutlined,
    UserOutlined,
} from "@ant-design/icons";


const NotFoundPage = lazy(() => import("./pages/404"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const ReportRevenue = lazy(() => import("./pages/report/revenue"));
const ReportProduct = lazy(() => import("./pages/report/product"));
const ReportCustomer = lazy(() => import("./pages/report/customer"));

const ProfilePage = lazy(() => import("./pages/profile"));


const ContactPage = lazy(() => import("./pages/contact"));
const CreateContactPage = lazy(() => import("./pages/contact/new"));
const EditContactPage = lazy(() => import("./pages/contact/edit"));

const BlogCategoryPage = lazy(() => import("./pages/blog_category"));
const CreateBlogCategoryPage = lazy(() => import("./pages/blog_category/new"));
const EditBlogCategoryPage = lazy(() => import("./pages/blog_category/edit"));

const BlogPostPage = lazy(() => import("./pages/blog-post"));
const CreateBlogPostPage = lazy(() => import("./pages/blog-post/new"));
const EditBlogPostPage = lazy(() => import("./pages/blog-post/edit"));


const CoursePage = lazy(() => import("./pages/course"));
const CreateCoursePage = lazy(() => import("./pages/course/new"));
const EditCoursePage = lazy(() => import("./pages/course/edit"));

const LevelPage = lazy(() => import("./pages/course/level"));
const CreateLevelPage = lazy(() => import("./pages/course/level/new"));
const EditLevelPage = lazy(() => import("./pages/course/level/edit"));

const ClassPage = lazy(() => import("./pages/class"));
const CreateClassPage = lazy(() => import("./pages/class/new"));
const EditClassPage = lazy(() => import("./pages/class/edit"));
const DetailClassPage = lazy(() => import("./pages/class/detail"));
const DetailStudentPage = lazy(() => import("./pages/class/student-detail"));

const OrderPage = lazy(() => import("./pages/order"));
const CreateOrderPage = lazy(() => import("./pages/order/new"));
const EditOrderPage = lazy(() => import("./pages/order/edit"));

const OrderHistoryPage = lazy(() => import("./pages/order-history"));
const CreateOrderHistoryPage = lazy(() => import("./pages/order-history/new"));
const EditOrderHistoryPage = lazy(() => import("./pages/order-history/edit"));


const BranchPage = lazy(() => import("./pages/branch"));
const CreateBranchPage = lazy(() => import("./pages/branch/new"));
const EditBranchPage = lazy(() => import("./pages/branch/edit"));

const RoomPage = lazy(() => import("./pages/branch/room"));
const CreateRoomPage = lazy(() => import("./pages/branch/room/new"));
const EditRoomPage = lazy(() => import("./pages/branch/room/edit"));

const ClassSchedulePage = lazy(() => import("./pages/class-schedule"));
const CreateClassSchedulePage = lazy(() => import("./pages/class-schedule/new"));
const EditClassSchedulePage = lazy(() => import("./pages/class-schedule/edit"));

const StudentCoursePage = lazy(() => import("./pages/student_course"));

const TeacherPage = lazy(() => import("./pages/teacher"));
const CreatTeacherPage = lazy(() => import("./pages/teacher/new"));
const EditTeacherPage = lazy(() => import("./pages/teacher/edit"));

const TeacherSchedule = lazy(() => import("./pages/teacher-schedule"));

const TimeKeeping = lazy(() => import("./pages/time-keeping"));

const DegreePage = lazy(() => import("./pages/degree"));
const CreateDegreePage = lazy(() => import("./pages/degree/new"));
const EditDegreePage = lazy(() => import("./pages/degree/edit"));

const CertificatePage = lazy(() => import("./pages/certificate"));
const CreateCertificatePage = lazy(() => import("./pages/certificate/new"));
const EditCertificatePage = lazy(() => import("./pages/certificate/edit"));

const StudentPage = lazy(() => import("./pages/student"));
const CreateStudentPage = lazy(() => import("./pages/student/new"));
const EditStudentPage = lazy(() => import("./pages/student/edit"));


const CreateStudentPointPage = lazy(() => import("./pages/student-point/new"));
const EditStudentPointPage = lazy(() => import("./pages/student-point/edit"));



const routes = [
    {
        path: "dashboard",
        title: "T???ng quan",
        icon: <DashboardOutlined />,
        component: Dashboard,
        roles: ['admin','manage']
    },
    {
        path: "report",
        title: "B??o c??o",
        icon: <PieChartOutlined />,
        childs: [
            {
                title: "B??o c??o doanh thu",
                path: "revenue",
                component: ReportRevenue,
            },
            {
                path: "product",
                title: "B??o c??o l???p h???c",
                component: ReportProduct,
            },
            {
                path: "customer",
                title: "B??o c??o h???c vi??n",
                component: ReportCustomer,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "branch",
        title: "Chi nh??nh",
        icon: <BankOutlined />,
        childs: [
            {
                title: "Qu???n l?? chi nh??nh",
                path: "",
                component: BranchPage,
            },
            {
                path: "new",
                title: "Th??m chi nh??nh",
                component: CreateBranchPage,
                hidden: true,
            },
            {
                path: ":id",
                title: "S???a chi nh??nh",
                hidden: true,
                component: EditBranchPage,
            },
            {
                title: "Qu???n l?? ph??ng h???c",
                path: "room",
                component: RoomPage,
            },
            {
                path: "room/new",
                title: "Th??m ph??ng h???c",
                component: CreateRoomPage,
                hidden: true,
            },
            {
                path: "room/:id",
                title: "S???a ph??ng h???c",
                hidden: true,
                component: EditRoomPage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "class",
        title: "L???p h???c",
        icon: <HomeOutlined/>,
        childs: [
            {
                title: "Qu???n l?? l???p h???c",
                path: "",
                component: ClassPage,
            },
            {
                path: "new",
                title: "Th??m l???p h???c",
                component: CreateClassPage,
                hidden: true,
            },
            {
                path: "detail/:id",
                title: "Chi ti???t l???p h???c",
                hidden: true,
                component: DetailClassPage,
            },
            {
                path: "student-detail/:id/:classId",
                title: "Th??ng tin h???c vi??n",
                hidden: true,
                component: DetailStudentPage,
            },
            {
                path: ":id",
                title: "S???a l???p h???c",
                hidden: true,
                component: EditClassPage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "student-point",
        title: "??i???m h???c vi??n",
        hidden: true,
        childs: [
            {
                title: "Th??m ??i???m h???c vi??n",
                path: "new/:id/:classId",
                component: CreateStudentPointPage,
                hidden: true,
            },
            {
                title: "Ch???nh s???a ??i???m h???c vi??n",
                path: ":id/:classId/:pointId",
                component: EditStudentPointPage,
                hidden: true,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "course",
        title: "Kho?? h???c",
        icon: <BookOutlined />,
        childs: [
            {
                title: "Qu???n l?? kho?? h???c",
                path: "",
                component: CoursePage,
            },
            {
                path: "new",
                title: "Th??m li??n h???",
                component: CreateCoursePage,
                hidden: true,
            },
            {
                path: ":id",
                title: "S???a li??n h???",
                hidden: true,
                component: EditCoursePage,
            },
            {
                title: "Qu???n l?? tr??nh ?????",
                path: "level",
                component: LevelPage,
            },
            {
                path: "level/new",
                title: "Th??m tr??nh ?????",
                component: CreateLevelPage,
                hidden: true,
            },
            {
                path: "level/:id",
                title: "S???a tr??nh ?????",
                hidden: true,
                component: EditLevelPage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "student/course",
        title: "Kho?? h???c hs",
        icon: <BookOutlined />,
        childs: [
            {
                title: "Kho?? h???c ????ng k??",
                path: "",
                component: StudentCoursePage,
            },
        ],
    },

    {
        path: "class-schedule",
        title: "Th???i kho?? bi???u",
        icon: <ScheduleOutlined />,
        childs: [
            {
                title: "Qu???n l?? TKB",
                path: "",
                component: ClassSchedulePage,
            },
            {
                path: "new",
                title: "Th??m th???i kho?? bi???u",
                component: CreateClassSchedulePage,
                hidden: true
            },
            {
                path: ":id",
                title: "S???a ????n ????ng k??",
                hidden: true,
                component: EditClassSchedulePage,
            },
        ],
        roles: ['admin','manage','student','teacher']
    },
    {
        path: "order",
        title: "????n ????ng k??",
        icon: <HddOutlined />,
        childs: [
            {
                title: "Qu???n l?? ????n ????ng k??",
                path: "",
                component: OrderPage,
            },
            {
                path: "new",
                title: "Th??m ????n ????ng k??",
                component: CreateOrderPage,
                hidden: true,
            },
            {
                path: ":id",
                title: "S???a ????n ????ng k??",
                hidden: true,
                component: EditOrderPage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "order-history",
        title: "Chi ti???t n???p h???c ph??",
        hidden: true,
        childs: [
            {
                path: "new/:orderId",
                title: "Th??m ????n ????ng k??",
                component: CreateOrderHistoryPage,
                hidden: true,
            },
            {
                path: ":id",
                title: "S???a ????n ????ng k??",
                hidden: true,
                component: EditOrderHistoryPage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "teacher",
        title: "Gi??o vi??n",
        icon: <UserOutlined />,
        childs: [
            {
                title: "Qu???n l?? gi??o vi??n",
                path: "",
                component: TeacherPage,
            },
            {
                path: "new",
                title: "Th??m gi??o vi??n",
                component: CreatTeacherPage,
                hidden: true,
            },
            {
                path: ":id",
                title: "S???a gi??o vi??n",
                hidden: true,
                component: EditTeacherPage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "blog",
        title: "Tin t???c",
        icon: <NotificationOutlined />,
        childs: [
            {
                title: "Qu???n l?? tin t???c",
                path: "category",
                component: BlogCategoryPage,
            },
            {
                path: "category/new",
                title: "Th??m tin t???c",
                component: CreateBlogCategoryPage,
                hidden: true,
            },
            {
                path: "category/:id",
                title: "S???a tin t???c",
                hidden: true,
                component: EditBlogCategoryPage,
            },
            {
                title: "Qu???n l?? b??i vi???t",
                path: "post",
                component: BlogPostPage,
            },
            {
                path: "post/new",
                title: "Th??m b??i vi???t",
                component: CreateBlogPostPage,
                hidden: true,
            },
            {
                path: "post/:id",
                title: "S???a b??i vi???t",
                hidden: true,
                component: EditBlogPostPage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "teacher-schedule",
        title: "TKB GV",
        icon: <SettingOutlined />,
        component: TeacherSchedule,
        roles: ['admin','manage','student','teacher']
    },
    {
        path: "time-keeping",
        title: "Ch???m c??ng",
        icon: <SettingOutlined />,
        component: TimeKeeping,
        roles: ['admin','manage','student','teacher']
    },
    {
        path: "contact",
        title: "Li??n h???",
        icon: <ContactsOutlined />,
        childs: [
            {
                title: "Qu???n l?? li??n h???",
                path: "",
                component: ContactPage,
            },
            {
                path: "new",
                title: "Th??m li??n h???",
                component: CreateContactPage,
                hidden: true,
            },
            {
                path: ":id",
                title: "S???a li??n h???",
                hidden: true,
                component: EditContactPage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "degree",
        title: "H???c v???",
        icon: <ContactsOutlined />,
        childs: [
            {
                title: "Qu???n l?? h???c v???",
                path: "",
                component: DegreePage,
            },
            {
                path: "new",
                title: "Th??m h???c v???",
                component: CreateDegreePage,
                hidden: true,
            },
            {
                path: ":id",
                title: "S???a h???c v???",
                hidden: true,
                component: EditDegreePage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "certificate",
        title: "Ch???ng ch???",
        icon: <ContactsOutlined />,
        childs: [
            {
                title: "Qu???n l?? ch???ng ch???",
                path: "",
                component: CertificatePage,
            },
            {
                path: "new",
                title: "Th??m h???c v???",
                component: CreateCertificatePage,
                hidden: true,
            },
            {
                path: ":id",
                title: "S???a h???c v???",
                hidden: true,
                component: EditCertificatePage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "student",
        title: "H???c vi??n",
        icon: <ContactsOutlined />,
        childs: [
            {
                title: "Qu???n l?? h???c vi??n",
                path: "",
                component: StudentPage,
            },
            {
                path: "new",
                title: "Th??m h???c vi??n",
                component: CreateStudentPage,
                hidden: true,
            },
            {
                path: ":id",
                title: "S???a h???c vi??n",
                hidden: true,
                component: EditStudentPage,
            },
        ],
        roles: ['admin','manage']
    },
    {
        path: "profile",
        title: "H??? s??",
        icon: <SettingOutlined />,
        component: ProfilePage,
        roles: ['admin','manage','student','teacher']
    },
    {
        path: "/admin/*",
        title: "404",
        hidden: true,
        component: NotFoundPage,
        roles: ['admin','manage','student','teacher']
    },


];

export default routes;
