import SearchIcon from '@mui/icons-material/Search';
import searchData from "../../Pages/Projects/utils/personalProjects";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import colors from '../Constants/colorscheme';

const SearchBar = () => {
    return (
        <div className="searchBar">
            <Autocomplete
                options={searchData.map((element)=> {return element['name']})}
                freeSolo
                renderOption={(props, option) => (
                    <Link {...props} style={{ color: colors[2], backgroundColor: colors[1]}} to={`/Projects`} state={{ goto: `${option}`}}>
                        {option}
                    </Link>
                )}
                renderInput={(params) => (
                  <div style={{ display: 'flex', alignItems: 'center', margin: '0 1rem'}}>
                      <SearchIcon />
                      <TextField sx={{zIndex:0}} {...params} label="Search projects…" fullWidth size="small" color="secondary"/>
                  </div>
                )}
            />
        </div>
    );
}

export default SearchBar;