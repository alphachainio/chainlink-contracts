"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class AccessControllerInterfaceFactory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AccessControllerInterfaceFactory = AccessControllerInterfaceFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "hasAccess",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbGxlckludGVyZmFjZUZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBY2Nlc3NDb250cm9sbGVySW50ZXJmYWNlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDO0FBQzFDLG9CQUFvQjs7QUFFcEIsbUNBQTBDO0FBSzFDLE1BQWEsZ0NBQWdDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBZSxFQUNmLGdCQUFtQztRQUVuQyxPQUFPLElBQUksaUJBQVEsQ0FDakIsT0FBTyxFQUNQLElBQUksRUFDSixnQkFBZ0IsQ0FDWSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVhELDRFQVdDO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxPQUFPO2dCQUNyQixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsT0FBTzthQUNkO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsV0FBVztRQUNqQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxZQUFZLEVBQUUsTUFBTTtnQkFDcEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhdGVkIGJ5IHRzLWdlbmVyYXRvciB2ZXIuIDAuMC44ICovXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBDb250cmFjdCwgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzL3Byb3ZpZGVyc1wiO1xuXG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sbGVySW50ZXJmYWNlIH0gZnJvbSBcIi4vQWNjZXNzQ29udHJvbGxlckludGVyZmFjZVwiO1xuXG5leHBvcnQgY2xhc3MgQWNjZXNzQ29udHJvbGxlckludGVyZmFjZUZhY3Rvcnkge1xuICBzdGF0aWMgY29ubmVjdChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbmVyT3JQcm92aWRlcjogU2lnbmVyIHwgUHJvdmlkZXJcbiAgKTogQWNjZXNzQ29udHJvbGxlckludGVyZmFjZSB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChcbiAgICAgIGFkZHJlc3MsXG4gICAgICBfYWJpLFxuICAgICAgc2lnbmVyT3JQcm92aWRlclxuICAgICkgYXMgQWNjZXNzQ29udHJvbGxlckludGVyZmFjZTtcbiAgfVxufVxuXG5jb25zdCBfYWJpID0gW1xuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwidXNlclwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImJ5dGVzXCIsXG4gICAgICAgIG5hbWU6IFwiZGF0YVwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiaGFzQWNjZXNzXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYm9vbFwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJvb2xcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfVxuXTtcbiJdfQ==