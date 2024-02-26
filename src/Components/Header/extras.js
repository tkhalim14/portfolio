
import './index.css';
import SearchBar from './searchBar';
import DrawerComponent from './drawer';
import DropDownMenuElement from './dropDown';

const UserLogo = () =>{
    return(
        <div style={{padding: '0 1rem'}}>
            <svg width="2rem" height="2rem" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.42286" cy="6.42286" r="6.42286" fill="#464646"/>
                <path d="M25.6914 6.42286C25.6914 7.69318 25.3147 8.93498 24.609 9.99121C23.9032 11.0474 22.9001 11.8707 21.7265 12.3568C20.5529 12.8429 19.2614 12.9701 18.0155 12.7223C16.7696 12.4745 15.6252 11.8628 14.7269 10.9645C13.8287 10.0663 13.2169 8.92181 12.9691 7.6759C12.7213 6.42999 12.8485 5.13856 13.3346 3.96494C13.8207 2.79131 14.644 1.7882 15.7002 1.08245C16.7564 0.376694 17.9982 -1.51484e-08 19.2686 0V6.42286H25.6914Z" fill="#464646"/>
                <path d="M6.42286 25.6914C7.69318 25.6914 8.93498 25.3147 9.99121 24.609C11.0474 23.9032 11.8707 22.9001 12.3568 21.7265C12.8429 20.5529 12.9701 19.2614 12.7223 18.0155C12.4745 16.7696 11.8628 15.6252 10.9645 14.7269C10.0663 13.8287 8.92181 13.2169 7.6759 12.9691C6.42999 12.7213 5.13856 12.8485 3.96494 13.3346C2.79131 13.8207 1.7882 14.644 1.08245 15.7002C0.376695 16.7564 1.91813e-07 17.9982 0 19.2686L6.42286 19.2686L6.42286 25.6914Z" fill="#464646"/>
                <circle cx="19.2685" cy="19.2686" r="6.42286" transform="rotate(-61 19.2685 19.2686)" fill="#464646"/>
                <path d="M5.28829 5.61256H3.84555V5.28891H8.65652V5.61256H7.20829V9.12891H5.28829V5.61256Z" fill="white"/>
                <path d="M17.3132 18.2494H19.1783V19.9664H20.3907V18.2494H22.2558V22.0894H20.3907V20.3339H19.1783V22.0894H17.3132V18.2494Z" fill="white"/>
            </svg>
        </div>
    );
}

const ProjectSearchBar = () => {
    return (
        <SearchBar/>
    );
}

const Drawer = (props) => {
    return (
        <DrawerComponent {...props}/>
    )
};

const DropdownMenu = (props) => {
    return (
        <DropDownMenuElement {...props}/>
    );
}

export {UserLogo, ProjectSearchBar, Drawer, DropdownMenu};