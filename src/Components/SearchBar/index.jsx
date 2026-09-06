import SearchIcon from '@mui/icons-material/Search';
import searchData from "../../Pages/Projects/utils/personalProjects";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import colors from '../Constants/colorScheme';

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
                slotProps={{
                  paper: {
                    sx: {
                      marginTop: '0.5rem',
                      border: '2px solid white',
                      borderRadius: '0.5rem',
                    },
                  },
                }}
            />
        </div>
    );
}

export default SearchBar;

