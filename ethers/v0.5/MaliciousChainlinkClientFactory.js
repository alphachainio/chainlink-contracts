"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class MaliciousChainlinkClientFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides);
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides);
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MaliciousChainlinkClientFactory = MaliciousChainlinkClientFactory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkRequested",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkFulfilled",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkCancelled",
        type: "event"
    }
];
const _bytecode = "0x608060405260016004556001600655348015601957600080fd5b5060358060276000396000f3fe6080604052600080fdfea165627a7a723058204c2086821d925135b0298db236e1bc7394bac3edfe584494227a9ff7807607a00029";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFsaWNpb3VzQ2hhaW5saW5rQ2xpZW50RmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1hbGljaW91c0NoYWlubGlua0NsaWVudEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUEwQztBQUMxQyxvQkFBb0I7O0FBRXBCLG1DQUEyRDtBQU8zRCxNQUFhLCtCQUFnQyxTQUFRLHdCQUFlO0lBQ2xFLFlBQVksTUFBZTtRQUN6QixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQWdDO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQXNDLENBQUM7SUFDdEUsQ0FBQztJQUNELG9CQUFvQixDQUFDLFNBQWdDO1FBQ25ELE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBZTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUE2QixDQUFDO0lBQzNELENBQUM7SUFDRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFvQyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQWUsRUFDZixnQkFBbUM7UUFFbkMsT0FBTyxJQUFJLGlCQUFRLENBQ2pCLE9BQU8sRUFDUCxJQUFJLEVBQ0osZ0JBQWdCLENBQ1csQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7QUEzQkQsMEVBMkJDO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxPQUFPO0tBQ2Q7Q0FDRixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQ2IsNExBQTRMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZWQgYnkgdHMtZ2VuZXJhdG9yIHZlci4gMC4wLjggKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IENvbnRyYWN0LCBDb250cmFjdEZhY3RvcnksIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcImV0aGVycy9wcm92aWRlcnNcIjtcbmltcG9ydCB7IFVuc2lnbmVkVHJhbnNhY3Rpb24gfSBmcm9tIFwiZXRoZXJzL3V0aWxzL3RyYW5zYWN0aW9uXCI7XG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uT3ZlcnJpZGVzIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IE1hbGljaW91c0NoYWlubGlua0NsaWVudCB9IGZyb20gXCIuL01hbGljaW91c0NoYWlubGlua0NsaWVudFwiO1xuXG5leHBvcnQgY2xhc3MgTWFsaWNpb3VzQ2hhaW5saW5rQ2xpZW50RmFjdG9yeSBleHRlbmRzIENvbnRyYWN0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25lcj86IFNpZ25lcikge1xuICAgIHN1cGVyKF9hYmksIF9ieXRlY29kZSwgc2lnbmVyKTtcbiAgfVxuXG4gIGRlcGxveShvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFByb21pc2U8TWFsaWNpb3VzQ2hhaW5saW5rQ2xpZW50PiB7XG4gICAgcmV0dXJuIHN1cGVyLmRlcGxveShvdmVycmlkZXMpIGFzIFByb21pc2U8TWFsaWNpb3VzQ2hhaW5saW5rQ2xpZW50PjtcbiAgfVxuICBnZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXMpO1xuICB9XG4gIGF0dGFjaChhZGRyZXNzOiBzdHJpbmcpOiBNYWxpY2lvdXNDaGFpbmxpbmtDbGllbnQge1xuICAgIHJldHVybiBzdXBlci5hdHRhY2goYWRkcmVzcykgYXMgTWFsaWNpb3VzQ2hhaW5saW5rQ2xpZW50O1xuICB9XG4gIGNvbm5lY3Qoc2lnbmVyOiBTaWduZXIpOiBNYWxpY2lvdXNDaGFpbmxpbmtDbGllbnRGYWN0b3J5IHtcbiAgICByZXR1cm4gc3VwZXIuY29ubmVjdChzaWduZXIpIGFzIE1hbGljaW91c0NoYWlubGlua0NsaWVudEZhY3Rvcnk7XG4gIH1cbiAgc3RhdGljIGNvbm5lY3QoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25lck9yUHJvdmlkZXI6IFNpZ25lciB8IFByb3ZpZGVyXG4gICk6IE1hbGljaW91c0NoYWlubGlua0NsaWVudCB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChcbiAgICAgIGFkZHJlc3MsXG4gICAgICBfYWJpLFxuICAgICAgc2lnbmVyT3JQcm92aWRlclxuICAgICkgYXMgTWFsaWNpb3VzQ2hhaW5saW5rQ2xpZW50O1xuICB9XG59XG5cbmNvbnN0IF9hYmkgPSBbXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBcImlkXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXMzMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcIkNoYWlubGlua1JlcXVlc3RlZFwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJpZFwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJDaGFpbmxpbmtGdWxmaWxsZWRcIixcbiAgICB0eXBlOiBcImV2ZW50XCJcbiAgfSxcbiAge1xuICAgIGFub255bW91czogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IFwiaWRcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiQ2hhaW5saW5rQ2FuY2VsbGVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH1cbl07XG5cbmNvbnN0IF9ieXRlY29kZSA9XG4gIFwiMHg2MDgwNjA0MDUyNjAwMTYwMDQ1NTYwMDE2MDA2NTUzNDgwMTU2MDE5NTc2MDAwODBmZDViNTA2MDM1ODA2MDI3NjAwMDM5NjAwMGYzZmU2MDgwNjA0MDUyNjAwMDgwZmRmZWExNjU2MjdhN2E3MjMwNTgyMDRjMjA4NjgyMWQ5MjUxMzViMDI5OGRiMjM2ZTFiYzczOTRiYWMzZWRmZTU4NDQ5NDIyN2E5ZmY3ODA3NjA3YTAwMDI5XCI7XG4iXX0=