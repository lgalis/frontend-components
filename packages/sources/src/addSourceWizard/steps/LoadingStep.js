import React from 'react';
import PropTypes from 'prop-types';
import {
    EmptyState,
    EmptyStateVariant,
    EmptyStateBody,
    EmptyStateSecondaryActions,
    Button,
    Bullseye,
    Spinner,
    Progress,
    EmptyStateIcon
} from '@patternfly/react-core';

const LoadingStep = ({ onClose, customText, progressStep, progressTexts }) => <Bullseye>
    <EmptyState variant={ EmptyStateVariant.full } className="ins-c-sources__empty-state">
        <EmptyStateIcon icon={ Spinner } />
        <EmptyStateBody>
            {progressTexts ?
                <Progress
                    value={progressStep}
                    min={0}
                    max={progressTexts.length - 1}
                    title=" "
                    label={progressTexts[progressStep]}
                    valueText={progressTexts[progressStep]}
                    className="pf-u-mb-md ins-c-sources__progress"
                />
                : customText
            }
        </EmptyStateBody>
        { onClose &&
        <EmptyStateSecondaryActions>
            <Button variant="link" onClick={ onClose }>Cancel</Button>
        </EmptyStateSecondaryActions> }
    </EmptyState>
</Bullseye>;

LoadingStep.propTypes = {
    onClose: PropTypes.func,
    customText: PropTypes.string,
    progressStep: PropTypes.number,
    progressTexts: PropTypes.arrayOf(PropTypes.string)
};

LoadingStep.defaultProps = {
    customText: 'Loading, please wait.'
};

export default LoadingStep;
