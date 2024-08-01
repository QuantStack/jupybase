import * as React from 'react';
import { Dialog, showDialog } from '@jupyterlab/apputils';
import CodeMirror from '@uiw/react-codemirror';
import { githubLight } from '@uiw/codemirror-theme-github';
import {
  closeButtonDialogClass,
  shareHeaderInfoClass
} from './style/projectPanel';
import { EnvironmentIcon } from './icons';

export interface IEnvironmentProps {
  projectName: string;
  envCode: string;
  envType: string;
}

export const EnvironmentDialog = ({
  projectName,
  envCode,
  envType
}: IEnvironmentProps) => {
  const readOnly: boolean = true;
  const editable: boolean = false;

  const title = (
    <span className="jp-About-header">
      <EnvironmentIcon.react margin="7px 9.5px" height="auto" width="28px" />
      <div className="jp-About-header-info">
        {(envType === 'build' ? 'Build ' : 'Kernel ') + 'Environment'}
        <span className="jp-About-version-info">
          <span className={shareHeaderInfoClass}>{projectName}</span>
        </span>
      </div>
    </span>
  );

  const body = (
    <CodeMirror
      value={envCode}
      minHeight="120px"
      minWidth="400px"
      readOnly={readOnly}
      editable={editable}
      theme={githubLight}
    />
  );

  return showDialog({
    title,
    body,
    buttons: [
      Dialog.createButton({
        label: 'Close',
        className: closeButtonDialogClass
      })
    ]
  });
};
