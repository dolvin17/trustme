var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Worker } from 'near-workspaces';
import anyTest from 'ava';
// Global context
var test = anyTest;
test.beforeEach(function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var worker, _a, root, contract;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = t.context;
                return [4 /*yield*/, Worker.init()];
            case 1:
                worker = _a.worker = _b.sent();
                root = worker.rootAccount;
                return [4 /*yield*/, root.createSubAccount('voting-contract')];
            case 2:
                contract = _b.sent();
                // Get wasm file path from package.json test script in folder above
                return [4 /*yield*/, contract.deploy(process.argv[2])];
            case 3:
                // Get wasm file path from package.json test script in folder above
                _b.sent();
                // Save state for test runs, it is unique for each test
                t.context.accounts = { root: root, contract: contract };
                return [2 /*return*/];
        }
    });
}); });
test.afterEach.always(function (t) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Stop Sandbox server
            return [4 /*yield*/, t.context.worker.tearDown().catch(function (error) {
                    console.log('Failed to stop the Sandbox:', error);
                })];
            case 1:
                // Stop Sandbox server
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// Test for voting functionality
test('allows voting and prevents duplicate votes', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, contract, root, vote, greeting, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = t.context.accounts, contract = _a.contract, root = _a.root;
                vote = 'Option A';
                return [4 /*yield*/, root.call(contract, 'vote', { vote: vote })];
            case 1:
                _b.sent();
                return [4 /*yield*/, contract.view('getResults', {})];
            case 2:
                greeting = _b.sent();
                // Check if vote is registered
                t.truthy(greeting.(function (result) { return result.vote === vote; }));
                _b.label = 3;
            case 3:
                _b.trys.push([3, 5, , 6]);
                return [4 /*yield*/, root.call(contract, 'vote', { vote: vote })];
            case 4:
                _b.sent();
                t.fail('Should not allow duplicate votes');
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                t.is(error_1.message, "this weasel already voted!");
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
// Test for getting vote results
test('returns accurate vote results', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, contract, root, votes, _i, votes_1, vote, results, expectedResults;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = t.context.accounts, contract = _a.contract, root = _a.root;
                votes = ['Option A', 'Option B', 'Option A'];
                _i = 0, votes_1 = votes;
                _b.label = 1;
            case 1:
                if (!(_i < votes_1.length)) return [3 /*break*/, 4];
                vote = votes_1[_i];
                return [4 /*yield*/, root.call(contract, 'vote', { vote: vote })];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [4 /*yield*/, contract.view('getResults', {})];
            case 5:
                results = _b.sent();
                expectedResults = {
                    'Option A': 2,
                    'Option B': 1,
                };
                t.deepEqual(results, expectedResults);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hdmEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0thcm9sL0Rlc2t0b3AvbmVhci90cnVzdG1lL2NvbnRyYWN0cy8iLCJzb3VyY2VzIjpbInNhbmRib3gtdHMvbWFpbi5hdmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sT0FBbUIsTUFBTSxLQUFLLENBQUM7QUFFdEMsaUJBQWlCO0FBQ2pCLElBQU0sSUFBSSxHQUFHLE9BQTRFLENBQUM7QUFFMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFPLENBQUM7Ozs7O2dCQUVQLEtBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtnQkFBVSxxQkFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUEvQyxNQUFNLEdBQUcsR0FBVSxNQUFNLEdBQUcsU0FBbUI7Z0JBRy9DLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUNmLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFBOztnQkFBekQsUUFBUSxHQUFHLFNBQThDO2dCQUUvRCxtRUFBbUU7Z0JBQ25FLHFCQUFNLFFBQVEsQ0FBQyxNQUFNLENBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ2hCLEVBQUE7O2dCQUhELG1FQUFtRTtnQkFDbkUsU0FFQyxDQUFDO2dCQUVGLHVEQUF1RDtnQkFDdkQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxJQUFJLE1BQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDOzs7O0tBQ3pDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQU8sQ0FBQzs7OztZQUM1QixzQkFBc0I7WUFDdEIscUJBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztvQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDcEQsQ0FBQyxDQUFDLEVBQUE7O2dCQUhGLHNCQUFzQjtnQkFDdEIsU0FFRSxDQUFDOzs7O0tBQ0osQ0FBQyxDQUFDO0FBRUgsZ0NBQWdDO0FBQ2hDLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxVQUFPLENBQUM7Ozs7O2dCQUNuRCxLQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBckMsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFBLENBQXdCO2dCQUd4QyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUN4QixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLEVBQUE7O2dCQUEzQyxTQUEyQyxDQUFDO2dCQUMzQixxQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsRUFBQTs7Z0JBQWhELFFBQVEsR0FBRyxTQUFxQztnQkFFdEQsOEJBQThCO2dCQUM5QixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDOzs7O2dCQUlsRCxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLEVBQUE7O2dCQUEzQyxTQUEyQyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7Ozs7Z0JBRTNDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBSyxDQUFDLE9BQU8sRUFBRSw0QkFBNEIsQ0FBQyxDQUFDOzs7OztLQUVyRCxDQUFDLENBQUM7QUFFSCxnQ0FBZ0M7QUFDaEMsSUFBSSxDQUFDLCtCQUErQixFQUFFLFVBQU8sQ0FBQzs7Ozs7Z0JBQ3RDLEtBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFyQyxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQUEsQ0FBd0I7Z0JBR3hDLEtBQUssR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7c0JBQzNCLEVBQUwsZUFBSzs7O3FCQUFMLENBQUEsbUJBQUssQ0FBQTtnQkFBYixJQUFJO2dCQUNiLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsRUFBQTs7Z0JBQTNDLFNBQTJDLENBQUM7OztnQkFEM0IsSUFBSyxDQUFBOztvQkFJUixxQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsRUFBQTs7Z0JBQS9DLE9BQU8sR0FBRyxTQUFxQztnQkFHL0MsZUFBZSxHQUFHO29CQUN0QixVQUFVLEVBQUUsQ0FBQztvQkFDYixVQUFVLEVBQUUsQ0FBQztpQkFDZCxDQUFDO2dCQUNGLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDOzs7O0tBQ3ZDLENBQUMsQ0FBQyJ9