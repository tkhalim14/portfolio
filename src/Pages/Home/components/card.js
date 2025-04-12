import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent, 
  CardActionArea,
  Typography
} from '@mui/material';
import colors from '../../../Components/Constants/colorScheme';

const CardComponent = ({title, subtitle, image, description}) => {
    return (
        <Card sx={{ width: 400 }} variant="outlined">
            <CardActionArea>
                <CardMedia        // 400x300 image resolution
                    component="img"
                    height="300px"
                    width="400px"
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