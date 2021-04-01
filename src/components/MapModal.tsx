//this is where I want the modal to pop up
//should be able to populate the modal based on what the capacity requirements are for a space
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Modal,
  Typography,
} from '@material-ui/core'
import React, { ReactElement } from 'react'

import PropTypes from 'prop-types'
import { CheckInPage } from '../pages/CheckInPage'
import { Link as RouterLink } from 'react-router-dom'

//i think i need an interface somewhere
// interface BuildingProps extends Building {
//   buildings: Building[];
// }

//pass a props through
//so when julian clicks on this it will pass the Julian parameter through and will snag that data
// export const MapModal: React.FC<BuildingProps> = (props: BuildingProps) => {
//   const [open, setOpen] = React.useState(false)

//   return (
//     <Dialog open={open}>
//       <DialogContent>
//         <Container>
//           <Typography>People currently studying{props.peopleInside}</Typography>
//           <Typography>Capacity {props.capacity} </Typography>
//           <Typography>Seats Available {props.seatsAvailable} </Typography>
//           <Button onClick={handleClose}></Button>
//         </Container>
//       </DialogContent>
//     </Dialog>
//   )
// }
const useStyles = makeStyles({
  modal: {},
  text: {
    textAlign: 'center',
    marginTop: 0,
  },
  button: {
    justifyContent: 'center',
  },
})

interface ModalProps {
  isOpen: boolean
  handleClose: () => void
  title: string
  children: ReactElement
}

export const MapModal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  title,
  children,
}) => {
  const classes = useStyles()
  return (
    <Dialog open={isOpen} onClose={handleClose} className={classes.modal}>
      <DialogContent>
        <h1 className={classes.text}>{title}</h1>
        <Typography>People currently studying</Typography>
        <Typography>Capacity </Typography>
        <Typography>Seats Available </Typography>
        {children}
        <DialogActions className={classes.button}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            component={RouterLink}
            to={'/checkin'}
          >
            Check In
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

MapModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
