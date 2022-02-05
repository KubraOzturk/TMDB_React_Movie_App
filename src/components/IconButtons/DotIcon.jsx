import * as React from 'react';
import PropTypes from 'prop-types';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const FontAwesomeSvgIcon = React.forwardRef((props, ref) => {
  const { icon } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
    
    </SvgIcon>
  );
});
function handleClick(){
  console.log("clicked");
}

export default function DotIcon() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
       <IconButton aria-label="Example" onClick={handleClick}>
          <FontAwesomeIcon icon={faEllipsisV} style={{color:"red"}}/>
        </IconButton>
    </Box>
  );
}
