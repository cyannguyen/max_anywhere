package applicationTest;

import inspectionTest.business.InspectionBusinessTest;
import inspectionTest.handlers.InspectionHandlersTest;
import issuesReturnsTest.business.IssuesReturnsBusinessTest;
import issuesReturnsTest.handlers.IssuesReturnsHandlersTest;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import physicalCountTest.business.PhysicalCountBusinessTest;
import physicalCountTest.handlers.InventoryHandlerTest;
import physicalCountTest.handlers.PhysicalCountHandlerTest;
import serviceRequestTest.business.ServiceRequestBusinessTest;
import serviceRequestTest.handlers.ServiceRequestHandlerTest;
import serviceRequestTest.handlers.SRDetailHandlerTest;
import transfersTest.business.TransfersBusinessTest;
import transfersTest.handlers.TransfersHandlersTest;
import transfersTest.handlers.TransfersAvailableItemsHandlerTest;
import transfersTest.business.InvuseObjectTest;
import assetAuditTest.business.AssetAuditBusinessTest;
import assetAuditTest.handlers.AssetAuditHandlersTest;
import assetDataManagerTest.business.AssetDataManagerBusinessTest;
import assetDataManagerTest.handlers.AssetDataManagerHandlersTest;
import workApprovalTest.business.WorkApprovalBusinessTest;
import workApprovalTest.handlers.WorkApprovalHandlerTest;
import workExecutionTest.business.*;
import workExecutionTest.business.util.CrewUtilTest;
import workExecutionTest.handlers.ActualLaborHandlerTest;
import workExecutionTest.handlers.FailureCodeHandlerTest;
import workExecutionTest.handlers.WODetailHandlerTest;
import workExecutionTest.handlers.WorkExecutionHandlerTest;
import workExecutionTest.handlers.WOExtDownloadHandlerTest;
import workExecutionTest.handlers.DataSheetHandlerTest;
import workExecutionTest.handlers.MetersListHandlerTest;
import workExecutionTest.handlers.SketchToolHandlerTest;
import workExecutionTest.handlers.StopTimerHandlerTest;


@RunWith(Suite.class)
@SuiteClasses({
	//Asset Audit
	AssetAuditBusinessTest.class,
	AssetAuditHandlersTest.class,
	//Asset Data Manager
	AssetDataManagerBusinessTest.class,
	AssetDataManagerHandlersTest.class,
	//Inspection
	InspectionBusinessTest.class,
	InspectionHandlersTest.class,
	//Issues Returns
	IssuesReturnsBusinessTest.class,
	IssuesReturnsHandlersTest.class,
	//Physical Count
	InventoryHandlerTest.class,
	PhysicalCountBusinessTest.class,
	PhysicalCountHandlerTest.class,
	//Service Request
	ServiceRequestBusinessTest.class,
	ServiceRequestHandlerTest.class,
	SRDetailHandlerTest.class,
	//Transfers
	TransfersBusinessTest.class,
	TransfersHandlersTest.class,
	//WorkApproval
	WorkApprovalBusinessTest.class,
	WorkApprovalHandlerTest.class,
	
	//Workorder Object
	ActualLaborObjectTest.class,
	DecimalCalculatorTest.class,
	_NumberFormatterMixinTest.class,
	WorkExecutionBusinessTest.class,
	WorkOrderObjectTest.class,
	CrewUtilTest.class,
	
	//WO Handlers
	ActualLaborHandlerTest.class,
	FailureCodeHandlerTest.class,
	WODetailHandlerTest.class,
	WorkExecutionHandlerTest.class,
	WOExtDownloadHandlerTest.class,
	DataSheetHandlerTest.class,
	MetersListHandlerTest.class,
	TransfersAvailableItemsHandlerTest.class,
	InvuseObjectTest.class, 
	StopTimerHandlerTest.class,
	SketchToolHandlerTest.class
})
public class AllTests {}
