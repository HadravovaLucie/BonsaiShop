import React, { Component } from "react";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import OrderSteps from "./OrderSteps"
import {bindActionCreators} from 'redux';
import {actions} from './Actions';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from "@material-ui/core/StepConnector";
import { StepIcon } from '@material-ui/core';

function ColorlibStepIcon(props) {
  //const classes = useColorlibStepIconStyles();
  //const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />
  };

  return (
    <div
      /*className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}*/
    >
      {icons[String(props.icon)]}
    </div>
  );
}



class OrderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //activeStep: 0,
      setActiveStep: 0,
      completed: new Set(),
      setCompleted: new Set(),
      skipped: new Set(),
      setSkipped: new Set(),
    }
  }  

  
  render() {

      function getSteps() {
        return ['Košík', 'Doprava', 'Platba','Osobní údaje','Hotovo'];
      }

      const steps = getSteps();
      const activeStep = this.props.activeStep;
      //const setActiveStep = this.state.setActiveStep;

      const completed = this.state.completed;
      //const setCompleted = this.state.setCompleted;

      const skipped = this.state.skipped;
      //const setSkipped = this.state.setSkipped;

      const totalSteps = () => {
        return getSteps().length;
      };
    
      const isStepOptional = (step) => {
        return step === 1;
      };
    
      const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
          // You probably want to guard against something like this
          // it should never occur unless someone's actively trying to break something.
          throw new Error("You can't skip a step that isn't optional.");
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
      };
    
      const skippedSteps = () => {
        return skipped.size;
      };
    
      const completedSteps = () => {
        return completed.size;
      };
    
      const allStepsCompleted = () => {
        return completedSteps() === totalSteps() - skippedSteps();
      };
    
      const isLastStep = () => {
        return activeStep === totalSteps() - 1;
      };
    
      const handleNext = () => {
        const newActiveStep =
          isLastStep() && !allStepsCompleted()
            ? // It's the last step, but not all steps have been completed
              // find the first step that has been completed
              steps.findIndex((step, i) => !completed.has(i))
            : activeStep + 1;
    
          this.setState({activeStep : newActiveStep })  
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleStep = (step) => () => {
        //setActiveStep(step);
        this.props.actions.next_order_step(step);
      };
    
      const handleComplete = () => {
        const newCompleted = new Set(completed);
        newCompleted.add(activeStep);
        setCompleted(newCompleted);
    
        /**
         * Sigh... it would be much nicer to replace the following if conditional with
         * `if (!this.allStepsComplete())` however state is not set when we do this,
         * thus we have to resort to not being very DRY.
         */
        if (completed.size !== totalSteps() - skippedSteps()) {
          handleNext();
        }
      };
    
      const handleReset = () => {
        setActiveStep(0);
        setCompleted(new Set());
        setSkipped(new Set());
      };
    
      const isStepSkipped = (step) => {
        return skipped.has(step);
      };
    
      function isStepComplete(step) {
        return completed.has(step);
      }

      
      return (
          <div>

            <Stepper alternativeLabel nonLinear activeStep={activeStep} >
              {steps.map((label, index) => {
                        const stepProps = {};
                        const buttonProps = {};
                        /*if (isStepSkipped(index)) {
                          stepProps.completed = false;
                        }*/

                return (
                    <Step key={label} {...stepProps}>
                      <StepButton
                        onClick={handleStep(index)}
                        completed={isStepComplete(index)}
                        {...buttonProps}
                        
                      >
                        {label}
                      </StepButton>
                      
                    </Step>
                    );
                  })}
            </Stepper>
            <div>
              <OrderSteps step={activeStep} />
            </div>
          </div> 
      );
      
      
  }
}

const mapStateToProps = state => {
  return {
    activeStep: state.orderreducer.order_step
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

const Order = connect(mapStateToProps,mapDispatchToProps)(OrderComponent);

export default (Order);