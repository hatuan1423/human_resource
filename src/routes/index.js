import HomePage from "../pages/HomePage/HomePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import ManageAccountPage from "../pages/ManageAccountPage/ManageAccountPage"
import ManageStaffPage from "../pages/ManageStaffPage/ManageStaffPage"
import ManageDetailStaff from "../pages/ManageDetailStaff/ManageDetailStaff"
import DayOffPage from "../pages/DayOffPage/DayOffPage"
import SalaryPage from "../pages/SalaryPage/SalaryPage"

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        isShowFooter: false,
    },
    {
        path: '/manage-account',
        page: ManageAccountPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/manage-staff',
        page: ManageStaffPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/manage-detail-staff',
        page: ManageDetailStaff,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/day-off',
        page: DayOffPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/salary',
        page: SalaryPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '*',
        page: NotFoundPage,
    }
]