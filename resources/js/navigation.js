import { taskOneButton, taskTwoButton, taskThreeButton, taskFourButton, taskFiveButton, taskSixButton } from './vars.js';
import { navigateCurrentPage } from './all-functions.js';

navigateCurrentPage(taskOneButton, 1, taskOneButton);
navigateCurrentPage(taskTwoButton, 2, taskOneButton);
navigateCurrentPage(taskThreeButton, 3, taskOneButton);
navigateCurrentPage(taskFourButton, 4, taskOneButton);
navigateCurrentPage(taskFiveButton, 5, taskOneButton);
navigateCurrentPage(taskSixButton, 6, taskOneButton);
