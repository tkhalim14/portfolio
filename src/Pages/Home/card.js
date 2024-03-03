import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import colors from '../../Components/Constants/colorscheme';

const CardComponent = ({title, subtitle, image, description}) => {
    return (
        <Card sx={{ maxWidth: 400 }} variant="outlined">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100%"
                    image={image}
                    alt={image}
                />
                <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom style={{color: colors[4]}} component="div">
                    {subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardComponent;